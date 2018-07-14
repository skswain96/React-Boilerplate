class App extends React.Component {
    render() {
        return (
              <section>
                <Header personname={"USER NAME"} keywords={".Lorem   .Ipsum   .Lorem "} />
                <Example />
              </section>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 content">
                            <h1>{this.props.personname}</h1>
                            <p>{this.props.keywords}</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

class Example extends React.Component {
    render() {
        return (
            <section>
              <h1>Testing for different section</h1>
            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
