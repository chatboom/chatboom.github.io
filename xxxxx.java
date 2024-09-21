package com.example.messengerclone;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private EditText messageInput;
    private ImageButton sendButton, emojiButton;
    private LinearLayout chatMessages;
    private ScrollView chatScrollView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Inicializace UI prvků
        messageInput = findViewById(R.id.messageInput);
        sendButton = findViewById(R.id.sendButton);
        emojiButton = findViewById(R.id.emojiButton);
        chatMessages = findViewById(R.id.chatMessages);
        chatScrollView = findViewById(R.id.chatScrollView);

        // Kliknutí na tlačítko pro odeslání zprávy
        sendButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendMessage();
            }
        });

        // Kliknutí na tlačítko pro emoji (aktuálně bez funkce)
        emojiButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Tady by mohla být logika pro výběr emoji
            }
        });
    }

    // Metoda pro odeslání zprávy
    private void sendMessage() {
        String message = messageInput.getText().toString().trim();
        if (!message.isEmpty()) {
            // Vytvoření nového TextView pro zprávu
            TextView newMessage = new TextView(this);
            newMessage.setText(message);
            newMessage.setTextSize(16);
            newMessage.setPadding(10, 10, 10, 10);
            newMessage.setBackgroundResource(R.drawable.message_bubble);
            newMessage.setTextColor(getResources().getColor(android.R.color.white));

            // Přidání zprávy do kontejneru
            chatMessages.addView(newMessage);

            // Posun ScrollView dolů, aby byla vidět nová zpráva
            chatScrollView.post(new Runnable() {
                @Override
                public void run() {
                    chatScrollView.fullScroll(View.FOCUS_DOWN);
                }
            });

            // Vyprázdnění textového pole
            messageInput.setText("");
        }
    }
}
