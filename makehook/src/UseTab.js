import { useState } from 'react';
import './App.css';

function UseTab() {
    const content = [
        {
            tab : "section 1",
            content : "I'm the content of the section 1"
        },
        {
            tab : "section 2",
            content : "I'm the content of the section 2"
        }
    ]

    const useTabs = (initialTab, allTabs) => {

        const [currentIndex, setCurrentIndex] = useState(initialTab);
        // if(!allTabs || Array.isArray(allTabs)){
        //     return;
        // 왜 지워야 되는건지 잘모르겟네}
        return {
            currentItem: allTabs[currentIndex],
            changeItem : setCurrentIndex
        };
    };
    const {currentItem, changeItem} = useTabs(0, content);
    return(
        <div className="App">
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    )
}

export default UseTab