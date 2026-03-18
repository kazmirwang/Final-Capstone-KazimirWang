function AddForm() {
    return(
        <div className="bg-mist-50 mx-3 shadow-sm mb-1 py-1 px-1">
            <form action="#">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" className="border rounded-sm mb-1" />
                <br />
                <label htmlFor="date">Due Date: </label>
                <input type="date" name="date" id="date" className="border rounded-sm mb-1" />
                <br />
                <label htmlFor="subject">Subject: </label>
                <select name="subject" id="subject"></select>
            </form>
        </div>
    );
}

export default AddForm;