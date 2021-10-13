import React, { useState, useEffect, useMemo } from 'react';
import Button from '../../component/Button';
function LifeCycle() {
    useMemo(() => {
        console.log('construct');
    }, [])
    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Smith'
    });
    // useEffect(() => {
    // // Update the document title using the browser API
    //     console.log("useEffect");
    //     return () => {
    //         //Component will unmount Component sẽ remove khỏi cấu trúc dom

    //     }
    // });
    useEffect(() => {
        console.log("useEffect run");
    });
    useEffect(() => {
        console.log("useEffect run - empty deps");
    }, []);
    useEffect(() => {
        console.log("useEffect run - counter deps");
    }, [counter]);
    useEffect(() => {
        console.log("useEffect run - visible deps");
    }, [visible]);
    console.log('render');
    const fullName = useMemo(() => {
        console.log("Đã lưu giữ dữ liệu")
        return user.firstName + ' ' + user.lastName;
    }, [user]);
    return (
        <div>
            <h1>Life Cycle {fullName}</h1>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>ADD</button>
            <p>{counter}</p>
            <button onClick={() => { setVisible(false); }}>Hide button</button>
            {
                visible && <Button />
            }
        </div>
    )
}

export default LifeCycle
