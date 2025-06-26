function App() {
    return (
        <main>
            <div className="container py-4">
                <Header />
                <Contador />
                <Contador />
                <Contador />
                <CustomJumbotron texto="Isso é um texto!" />
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