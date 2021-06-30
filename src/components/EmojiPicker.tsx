import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
    const [emojiValueFromCurrentRender, queueRerenderWithNewEmojiValue] = 
    useState<string>();
    const [storedValueFromCurrentRender, queueRerenderWithNewStoredValue] = 
    useState<string>();

    const handleStoreCurrentEmoji = () => {
        queueRerenderWithNewStoredValue(emojiValueFromCurrentRender);
    }

    const handleEmojiToAngel = () => {
        queueRerenderWithNewEmojiValue("😇");
        handleStoreCurrentEmoji(); 
    }

    const handleEmojiToMermaid = () => {
        queueRerenderWithNewEmojiValue("🧜‍♀️");
        handleStoreCurrentEmoji(); 
    }

    const handleEmojiToAlien = () => {
        queueRerenderWithNewEmojiValue("👽");
        handleStoreCurrentEmoji(); 
    }

    const handleEmojiToCat = () => {
        queueRerenderWithNewEmojiValue("😻");
        handleStoreCurrentEmoji(); 
    }

    const handleReset = () => {
        // resets storedValueFromCurrentRender at "Your stored emoji"
        queueRerenderWithNewEmojiValue(""); 
        // resets emojiValueFromCurrentRender at "Current emoji"
        queueRerenderWithNewStoredValue("");
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
        {/* <button onClick={handleStoreCurrentEmoji}>Store current emoji</button> */}
        <button onClick={handleReset}>Reset Counter</button>
      </>
    )
}