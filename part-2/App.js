const App = () => {
    return (
        <div> 
            <Tweet
            name = "Spif Fox"
            username = "Spifnach"
            date = {new Date().toDateString()}
            message = "Qualing for finals 100%."
            />

            <Tweet
            name = "Trevor Coe"
            username = "trevcoe"
            date = {new Date().toDateString()}
            message = "I will never use twitter."
            />
            <Tweet
            name = "Outta Ideas"
            username = "Empty"
            date = {new Date().toDateString()}
            message = "wasdwasdwasdwasdwasd"
            />
        </div>
    );
}