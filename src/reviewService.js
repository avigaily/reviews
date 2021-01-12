var gReviews = [
    {
        id: 'gyug',
        data: `לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.`,
        statistics: {
            publishedContributorsCount: 8,
            publishedContributionsPercent: 37,
            publishedContributionsCount: 1,
            publishedHighlightsCount: 1
        }
    }
    ,
    {
        id: 'gyud',
        data: `קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הב`,
        statistics: {
            publishedContributorsCount: 2,
            publishedContributionsPercent: 24,
            publishedContributionsCount: 1,
            publishedHighlightsCount: 1
        }
    },
    {
        id: 'gyue',
        data: `אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר .`,
        statistics: {
            publishedContributorsCount: 5,
            publishedContributionsPercent: 20,
            publishedContributionsCount: 1,
            publishedHighlightsCount: 1
        }
    }
]

export default {
    getById, 
    query,
    remove, 
    update
}

function getById(reviewId){
    return  gReviews.find(review=>review.id===reviewId)
}

function query(){
    return gReviews
}

function remove(reviewId){
    console.log('got to service remove',reviewId);
    var idx = gReviews.findIndex(review=>review.id===reviewId)
    if(idx>-1)gReviews.splice(idx, 1)
    console.log(gReviews);
    return gReviews
}

function update(reviewId,reviewData){
    var idx = gReviews.findIndex(review=>review.id===reviewId)
    gReviews[idx].data=reviewData
    return gReviews[idx]
}