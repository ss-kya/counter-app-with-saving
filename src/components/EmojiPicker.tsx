import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
    const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] = useState<string>();
    const [storedValueFromCurrentRender, queueRerenderWithNewStoredValue] = useState<string>();

    const handleEmojiToAngel = () => {
        queueRerenderWithNewEmojiValue("😇");
    }

    const handleEmojiToMermaid = () => {
        queueRerenderWithNewEmojiValue("🧜‍♀️");
    }

    const handleEmojiToAlien = () => {
        queueRerenderWithNewEmojiValue("👽");
    }

    const handleEmojiToCat = () => {
        queueRerenderWithNewEmojiValue("😻");
    }

    const handleStoreCurrentEmoji = () => {
        queueRerenderWithNewStoredValue(emojiValueFromCurrentRender);
    }

    const handleReset = () => {
        queueRerenderWithNewEmojiValue("")
    }

    return (
        <>
        <h1>Emoji picker</h1>
        <p>Your stored emoji: {storedValueFromCurrentRender}</p>
        <p>Current emoji: {emojiValueFromCurrentRender}</p>
        <button onClick={handleEmojiToAngel}>😇</button>
        <button onClick={handleEmojiToMermaid}>🧜‍♀️</button>
        <button onClick={handleEmojiToAlien}>👽</button>
        <button onClick={handleEmojiToCat}>😻</button>
        <br />
        <button onClick={handleStoreCurrentEmoji}>Store current emoji</button>
        <button onClick={handleReset}>Reset Counter</button>
      </>
    )
}