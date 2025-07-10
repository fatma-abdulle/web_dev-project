import React, { useEffect, useRef, useState } from "react";
import '../assets/chat.css';
import { Link } from 'react-router-dom';

export default function ChatWithUs() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    let currentUser = "guest";
    if (typeof window !== "undefined") {
        currentUser = localStorage.getItem("currentUser");
        if (!currentUser) {
            localStorage.setItem("currentUser", "guest");
            currentUser = "guest";
        }
    }

    const storageKey = `chat_${currentUser}`;

    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
            setMessages(JSON.parse(saved));
        }
    }, [storageKey]);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(messages));
        scrollToBottom();
    }, [messages, storageKey]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const userMessage = {
            sender: "user",
            text: trimmed,
            time: getTime(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        setTimeout(() => {
            const botReply = {
                sender: "bot",
                text: getBotReply(trimmed),
                time: getTime(),
            };
            setMessages((prev) => [...prev, botReply]);
        }, 600);
    };

    const getTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    const getBotReply = (input) => {
        input = input.toLowerCase();
        if (input.includes("hello") || input.includes("hi") || input.includes("good morning") || input.includes("good afternoon") || input.includes("good evening")) {
            return "Good day! 🌞 Welcome to the perfect customized gift shop! How can we assist you today?";
        }
        if (input.includes("customize") || input.includes("personalize")) {
            return "Absolutely! We specialize in custom gifts. Please tell us what you want customized.";
        }
        if (input.includes("color")) {
            return randomResponse([
                "What item are you interested in? We offer Red, Blue, Black, White, and more.",
                "Pick any color — we love making your gifts match your vibe!",
            ]);
        }
        if (input.includes("price") || input.includes("cost") || input.includes("how much")) {
            return randomResponse([
                "Most of our gifts range from $10 to $50 depending on customization.",
                "Customization like name printing or special colors may add $2–$4.",
            ]);
        }
        if (input.includes("delivery") || input.includes("ship")) {
            return randomResponse([
                "Standard delivery takes 1–3 business days. Express delivery is available within 24–48 hours.",
                "We ship countrywide! 🚚",
            ]);
        }
        if (input.includes("size") || input.includes("wrap")) {
            return "We offer various sizes and elegant packaging. Would you like it gift-wrapped?";
        }
        if (input.includes("recommend") || input.includes("suggest") || input.includes("gift idea")) {
            return "We’d love to help! Who are you shopping for — a friend, family, or partner?";
        }
        if (input.includes("location") || input.includes("open")) {
            return "We operate fully online, but our physical shop is in Nairobi. We're open Mon–Sat, 9am–6pm.";
        }
        if (input.includes("return") || input.includes("exchange") || input.includes("refund")) {
            return "We offer hassle-free returns within 7 days if the item is unused and in original condition.";
        }
        if (input.includes("contact") || input.includes("talk to someone") || input.includes("call you")) {
            return "You can reach our support team at 📞 +254 789001234.";
        }
        if (input.includes("order online") || input.includes("how to buy")) {
            return "Absolutely! You can order directly from our website. Browse categories and add to cart!";
        }
        if (input.includes("birthday") || input.includes("anniversary")) {
            return "That sounds lovely! We have curated collections for birthdays and anniversaries. 🎉";
        }
        if (input.includes("thank")) {
            return "You're welcome! Let us know if there's anything else. 🎁";
        }
        return randomResponse([
            "😊 Thanks for reaching out!",
            "Got it! Could you please tell us more about your request?",
            "We’re excited to assist — please describe further.",
        ]);
    };

    const randomResponse = (responses) => {
        return responses[Math.floor(Math.random() * responses.length)];
    };

    return (
        <div className="chat-wrapper">
            <Link to="/" className="back-home-btn">← Back Home</Link>
            <div className="chat-container">
                <div className="chat-header">
                    <div className="chat-header-icon">🎁</div>
                    <h2>GiftHub Chat</h2>
                </div>
                <div className="chat-messages">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.sender === "user" ? "right" : "left"}`}>
                            <div className="avatar">{msg.sender === "user" ? "U" : "B"}</div>
                            <div className="message-content">
                                <div className="message-text">{msg.text}</div>
                                <span className="message-time">{msg.time}</span>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="chat-input">
                    <div className="input-container">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSend();
                            }}
                        />
                        <button onClick={handleSend} className="send-button">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
