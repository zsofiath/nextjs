import {useRouter} from 'next/router'

function DetailsPage () {
    const router = useRouter();
    let routerParam = router.query.newsId
    return <div>Details--- {routerParam}</div>
}

export default DetailsPage