import logo from './logo.svg';
const Logo = () => {
    return (
        <img src={logo} className="App-logo" alt="logo" />
    )
}

const Content = () => {
    return (
        <p>
            hello world
        </p>
    )
}

export { Logo, Content }