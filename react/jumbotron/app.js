function App() {
    return (
        <main>
            <div className="container py-4">
                <Header />
                <Contador btnNome={false} />
                <CustomJumbotron />
                <DoisJumbotrons />
                <Footer />
            </div>
        </main>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);