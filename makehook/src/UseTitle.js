import { useEffect, useState } from "react";

function UseTitle() {
    const useTitle = initialTitle => {
        const [title, setTitle] = useState(initialTitle);
        const updateTitle = () => {
            const htmlTitle = document.querySelector("title");
            htmlTitle.innerText = title;
        };
        useEffect(updateTitle, [title]);

        return setTitle
    }

    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
        <div>{titleUpdater}</div>
    )
}

export default UseTitle;