import news from "../new-data";
import tintuc from "../new-data";
const New = {
        render: () => `<div>
        ${tintuc.map((tin)=>(
        `<div>
        ${tin.id},
        </div>
        <div>
        ${tin.title},
        </div>
        <div>
        ${tin.content}
        </div>`
    )).join('')
    }
        </div>`  ,
}

export default news;