package lm.swith.studyroom.model;

import java.sql.Timestamp;
import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MessageRequestDto {
    private Long message_id;
    
    private Long post_no;
    
    private Long userId;

    private String message;
    
    private Timestamp timestamp;

    public MessageRequestDto() {
        this.timestamp = Timestamp.from(Instant.now());
    }
}