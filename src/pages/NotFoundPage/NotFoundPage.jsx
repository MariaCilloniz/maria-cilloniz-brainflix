import "./NotFoundPage.scss";

function NotFoundPage() {
    return (
        <main className="not-found-page">
            <div className="not-found-page__container">
                <h1 className="not-found-page__title">404 Error</h1>
                <p className="not-found-page__message">Page Not Found</p>
                <p className="not-found-page__details">
                    The page you are looking for might have been removed 
                    or is temporarily unavailable.
                </p>
            </div>
        </main>
    );
}

export default NotFoundPage;