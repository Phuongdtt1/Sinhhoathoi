const GroupOperation = () => {
    return (

        <div
            className="container"
            box-sizing="border-box"
           
        >
            <label htmlFor="fname">Họ và tên:</label>
            <br/>
            <input
                type="text"
                id="fname"
                name="fname"
            />
            <br/>
            <label htmlFor="lname">Đơn vị:</label>
            <br/>
            <input
                type="text"
                id="dvi"
                name="dvi"
            />
            <br/>
            <br/>
            <link href="/quiz">
                <input
                    className="rounded-2xl bg-blue-500 text-white p-5 w-52 text-center"
                    type="button"
                    value="VÀO THI"
                />
            </link>
        </div>
    );
};
export default GroupOperation;