import Nav from './Nav';

const HeaderB = {
    render: () => (
        `<header class="d-flex justify-content-center py-3">
          <ul class="nav nav-pills">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="news" class="nav-link">News</a></li>
            <li class="nav-item"><a href="students" class="nav-link">Students</a></li>
            
          </ul>
        </header>`
    )
}


const Header = {
    // render: function () {
    //     return '<div>Header Component</div>';
    // },
    // render: (name, age, birthday) => ('<div>' + name + ', ' + age + ',' + '</div>'),
    render: (name = 'WE17101') =>
        `<div>
            <h1>${name}</h1>
            <div>${Nav.render()}</div>
        </div>`
        // sau mũi tên là ngoặc tròn -> return kết quả
};

export default HeaderB;