// functions
export const onItemInput = (e) => {
    setItem(e.target.value);
}

export const onUnitInput = (e) => {
    setUnit(e.target.value);
}

export const onQtyInput = (e) => {
    setQty(e.target.value);
}

export const onCategoryInput = (e) => {
    setCategory(e.target.value);
}

export const addItem = (e) => {
    e.preventDefault();
    let newItem = {
        name: item,
        unit: 'pcs',
        qty: qty,
        category: category
    }

    addPantryItem(newItem);

    setItem('');
    setQty(0);
    setCategory('');

    elRef.current.focus();

}
