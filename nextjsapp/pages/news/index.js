import Link from 'next/link'
function NewsPage () {
    return <div>The News

        <div>
            {/*  ez is működik, de oldal újratöltést csinál */}
            <a href="/news/blabla">Link</a>
            <a href="/news/blabla2">Link2</a>

            {/* Nem tölt újra */}
            <Link href="/news/blabla">Link</Link>
            <Link href="/news/blabla2">Link2</Link>
        </div>
    </div>
}

export default NewsPage