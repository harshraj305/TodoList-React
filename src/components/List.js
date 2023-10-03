import directionAudio from '../assets/sounds/mixkit-negative-tone-interface-tap-2569.wav';
import deleteAudio from '../assets/sounds/kuruto.mp3';

function List({ tasks, deleteTask, moveUpTask, moveDownTask }) {

    function handleDelete(index) {
        // play
        const deleteSound = new Audio(deleteAudio);
        deleteSound.play();

        console.log(index);
        deleteTask(index);
    }

    function handleUp(index) {

        // play
        const upSound = new Audio(directionAudio);
        upSound.play();

        console.log(index);
        moveUpTask(index);
    }

    function handleDown(index) {

        // play
        const downSound = new Audio(directionAudio);
        downSound.play();

        console.log(index);
        moveDownTask(index);
    }

    return (
        <>
            {tasks.map((task, index) => (
                <div key={index} className="list-container">
                    <div className="list">
                        <p><span>{task}</span></p>
                        <button
                            className="btnup"
                            onClick={() => handleUp(index)}
                        >up ⬆</button>

                        <button
                            className="btndown"
                            onClick={() => handleDown(index)}
                        >down ⬇</button>

                        <button
                            className="btndlt"
                            onClick={() => handleDelete(index)}   // this arrow method used coz it will only be executed in response to clickevent
                        >delete ❌</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default List;