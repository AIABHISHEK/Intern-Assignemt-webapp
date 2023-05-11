
import React, { useState } from 'react';
import SearchBar from '../Search/Search.js';
import Button from '../UI/Button.js';
import './Friend.css';
const Friend = (props) => {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const list = [
        {
            id: "01",
            name: "Ayush"
        },
        {
            id: "02",
            name: "Aryan"
        },
        {
            id: "03",
            name: "Aman"
        }
    ];

    const handleSelectAll = () => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = (e) => {
        const { id, checked } = e.target;
        console.log(e.target.checked);
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };
    return (
        <div className='friendAdd overlay'>
            <div className='friend-type-list'>
                {/* <div className='friend-type-item'></div> */}
                <Button>Friends</Button>
                <Button>ClassMates</Button>
                <Button>ClassMates</Button>
                <Button>ClassMates</Button>
                <Button>ClassMates</Button>
            </div>
            <div className='search'>
                <SearchBar />
            </div>
            <div className='friend-list'>
                {/* <div>
                    <p>search bar</p>
                </div> */}
                <div className='friend-select-all'>
                    <div>
                        <ul className='checks'>
                            <div id="selectAll">


                                <input type="checkbox"
                                    name="selectAll"

                                    onChange={handleSelectAll}
                                    checked={isCheckAll}
                                />
                                <div>
                                    Select All
                                </div>
                            </div>
                            {
                                list.map(({ id, name }) => {
                                    return (
                                        <div className="checkbox-list" key={id}>
                                            <img src="" alt="#profile" />
                                            <div>
                                                <div>
                                                    {name}
                                                </div>

                                                <input
                                                    key={id}
                                                    type="checkbox"
                                                    id={id}
                                                    name={name}
                                                    onChange={(e) => handleClick(e)}
                                                    checked={isCheck.includes(id)}
                                                />
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className='add-cancel-buttons'>
                <button onClick={props.OnConfirmHandler} className='add-friends-btn' type="submit">Add User</button>
                <button onClick={props.OnConfirmHandler} className='cancel-btn' type="submit">Cancel</button>
            </div>
        </div>
    )
}

export default Friend;