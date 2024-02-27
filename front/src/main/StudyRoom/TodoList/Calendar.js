import React, { useState, useEffect, useCallback } from 'react';
import Calendar from 'react-calendar'; //npm i react-calendar,
import 'react-calendar/dist/Calendar.css'; // css import
import moment from 'moment'; // npm i moment
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ReactCalendar() {
  const { post_no } = useParams();
  const [value, onChange] = useState(new Date()); //내가 선택하는 날짜
  const [selectedDate, setSelectedDate] = useState(null); // 선택된 날짜 상태 추가
  const [todo, setTodo] = useState([]); // TodoList를 가져올 데이터, 배열로 설정해준다.
  const [showInput, setShowInput] = useState(false); //+ 버튼 누르면 보여줄 비밀번호 input창

  //insert
  const handleInsert = async (e) => {
    e.preventDefault();
    try {
      // Todo 객체에 todo_date 추가
      const todoWithDate = {
        ...todo,
        todo_date: selectedDate, // 선택된 날짜 정보를 추가
      };
      const response = await axios.post(
        `http://localhost:8080/studyRoom/create/Todo/${post_no}`,
        todoWithDate,
        {
          withCredentials: true,
        }
      );
      console.log(post_no);
      console.log(todoWithDate.todo_date);
      console.log(todo.todo_list);
      // 추가한 Todo를 TodoList에 추가
      setTodo({ items: [...todo.items, response.data] }); // Update 'items' array
    } catch (error) {
      console.error('데이터 저장 불가', error);
    }
    setShowInput(false);
  };

  const handleInputChange = (e) => {
    //e 자리값 밑에 target
    const { name, value } = e.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  //const

  //select
  const fetchTodoList = useCallback(
    async (todo_date) => {
      try {
        // 서버로 보낼 데이터
        const requestData = {
          post_no: post_no,
          todo_date: moment(todo_date).format('YYYY-MM-DD'), // Date 객체를 'YYYY-MM-DD' 형식의 문자열로 변환
        };
        // TODO: 서버에서 해당 날짜의 TodoList를 가져오는 API 호출
        const response = await axios
          .get('http://localhost:8080/studyRoom/get/Todo', requestData, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });

        setTodo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('TodoList를 불러오는데 실패했습니다.', error);
      }
    },
    [post_no]
  );
  useEffect(
    () => {
      // 선택된 날짜가 변경될 때 TodoList 데이터를 불러옴
      if (selectedDate) {
        // Todo 데이터를 불러오는 로직 (axios 등을 사용)
        fetchTodoList(selectedDate);
        console.log(selectedDate);
      }
    },
    [selectedDate],
    [fetchTodoList]
  );

  return (
    <div>
      <Calendar
        onChange={(todo_date) => {
          onChange(todo_date);
          setSelectedDate(moment(todo_date).format('YYYY-MM-DD'));
        }}
        value={value}
        className="mx-auto w-full text-sm border-b"
      />{' '}
      <h2>{moment(value).format('YYYY년 MM월 DD일')} 할 일</h2>
      {/* TodoList 컴포넌트를 렌더링하고 선택된 날짜에 해당하는 할 일 목록을 전달 */}
      <div>
        <table>
          <thead>
            <tr>
              <th>할일 목록</th>
              {showInput ? (
                <div>
                  <input
                    type="text"
                    name="todo_list"
                    onChange={handleInputChange}
                  />
                  <button onClick={() => setShowInput(false)}>취소</button>
                  <button onClick={handleInsert}>작성</button>
                </div>
              ) : (
                <div></div>
              )}
              <button
                onClick={() => setShowInput((prevShowInput) => !prevShowInput)}
                style={{
                  display: showInput ? 'none' : 'block',
                }}
              >
                +
              </button>
            </tr>
          </thead>
          <tbody>
            {todo.length > 0 ? (
              todo.map((todo) => (
                <tr key={todo.value}>
                  <td>{todo.todo_list}</td>
                  <td>
                    <button>수정</button>
                  </td>
                  <td>
                    <button>삭제</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Todo List</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ReactCalendar;
