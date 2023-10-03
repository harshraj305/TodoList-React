function TaskCount({ tasks }) {

    const totalList = tasks.length;
    return (
        <div className="taskcount">
            Completed Items : 1 / {totalList}
        </div>
    );
}

export default TaskCount;