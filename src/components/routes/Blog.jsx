import DocumentTitle from "./DocumentTitle"


function Blog(){

    return(
        <>
            <DocumentTitle title="Блог: новини, звіти, статті"/>
                <div data-testid='blog-test'>blog</div>
        </>
    )
}

export default Blog