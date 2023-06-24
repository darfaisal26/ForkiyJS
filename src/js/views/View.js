import icons from 'url:../../img/icons.svg'; // parcel 2

export default class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup)
  };

  // update(data) {
  //   if (!data || (Array.isArray(data) && data.length === 0)) 
  //   return this.renderError();

  //   this._data = data;
  //   const newMarkup = this._generateMarkup();
  //   const newDOM = document.createRange().createContextualFragment(newMarkup);
  //   // const newElements = Array.from(newDOM.queryselectorAll('*'))
  //   //  console.log(newElements)
  //   //   const curElements = Arrray.from(this._parentElement.queryselectorAll('*'))

  // //   newElements.forEach((newEl, i) => {
  // //     const curEl = curElements[i];
  // //     // console.log(curEl,newEl.isEqualNode(curEl))

  // //     // updates changed text
  // //     if (!newEl.isEqualNode(curEl) && newEl.firtschild?.nodeValue.trim() !== '') {
  // //       curEl.textContent = newEl.textContent;
  // //     }

  // //     // updates changed attribute

  // //     if (!newEl.isEqualNode(curEl))
  // //       Array.from(newEl.attributes).forEach(attr =>
  // //         curEl.setAttribute(attr.name, attr.value));
  // //   });
  // }

  _clear() {
    this._parentElement.innerHTML = '';
  };

  renderSpinner() {
    const markup = `
          <div class="spinner">
          <svg>
          <use href="${icons}#icon-loader"></use>
          </svg>
          </div
          `;
    this._parentElement.insertAdjacentHTML('afterbegin', markup)
    this._clear();
  };

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
              <div>
                <svg>
                  <use href=" ${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup)

  };

}