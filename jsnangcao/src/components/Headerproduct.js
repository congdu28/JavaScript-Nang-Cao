import Nav from './Navproduct';

const HeaderB = {
    render: () =>
        `<header class="d-flex justify-content-center py-3">
    <ul class="nav nav-pills">
      <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
      <li class="nav-item"><a href="/news" class="nav-link">News</a></li>
      <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
      <li class="nav-item"><a href="/products" class="nav-link">product</a></li>
    </ul>
  </header>`
}


const Header = {
    // render: function(){
    //     return '<div>Header Components</div>';
    // },

    // render: (name) => ('<div>Header Components</div>')
    // sau mũi tên là ngoặc tròn -> tự return kết quả
    render: (name = 'WE17101') => `<div>
                                      <h1>${name}</h1>
                                      <div>${Nav.render()}</div>
                                      </div>`
};
export default HeaderB;