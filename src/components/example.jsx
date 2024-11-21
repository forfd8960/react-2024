
const Example = () => {
    const name = 'Alice';
    const x = 100;
    const y = 2000;

    const words = ['alice', 'bob', 'job', 'salary', 'programmer'];

    const loggedIn = true;

    const authorized = true;

    const styles = {
        color: 'green',
        fontSize: '26px',
    };

    return (
        <>
            <h1 className="text-5xl font-bold underline">
                Hello world!
            </h1>
            <div>

                { /* refer variable */}
                <p style={{ color: 'blue', fontSize: '25px' }} className="text-4xl">
                    Hello {name}
                </p>

                { /* expression */}
                <p className="text-3xl">
                    The sum of {x} + {y} = {x + y}
                </p>
            </div>

            <div>
                <ul>
                    {words.map((w, idx) => (
                        <li style={styles} key={idx}>{w}</li>
                    ))}
                </ul>

            </div>

            <div>
                {loggedIn ? <h1 className='text-6xl'>Hello Hello</h1> : <h1 className='text-3xl'>No you can't access</h1>}
            </div>

            <div>{authorized && <p className='text-3xl'>You are Authorized</p>}</div>
        </>
    )
}

export default Example