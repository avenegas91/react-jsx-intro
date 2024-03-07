function Person ({ name, age, hobbies}) {
    const voteText = age >= 18
        ? "Please Go Vote!"
        : "You must be 18 in order to vote!";

    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies: {hobbiesLIs}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}