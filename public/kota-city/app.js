'use strict';
(() => {
const products = [{"id":"street","name":"StreetKota","price":35},{"id":"city","name":"City Kota","price":45},{"id":"munch","name":"Munch Combo","price":55},{"id":"big","name":"Big Kota City","price":65},{"id":"chips","name":"Chips","price":25}];
const storageKey = 'kota-city-collection-basket-v1';
const maxQuantity = 99;
const basket = Object.create(null);
try {
  const stored = JSON.parse(localStorage.getItem(storageKey) || '{}');
  if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
    products.forEach(p => { if (Number.isInteger(stored[p.id]) && stored[p.id] > 0) basket[p.id] = Math.min(maxQuantity, stored[p.id]); });
  }
} catch (_) { /* Basket still works without browser storage. */ }
const items = document.getElementById('basket-items');
const checkout = document.getElementById('checkout');
const status = document.getElementById('status');
function money(value) { return 'R' + value; }
function persist() { try { localStorage.setItem(storageKey, JSON.stringify(basket)); } catch (_) {} }
function render(announcement) {
  items.replaceChildren();
  let count = 0;
  let total = 0;
  const lines = [];
  products.forEach(product => {
    const quantity = basket[product.id] || 0;
    if (!quantity) return;
    count += quantity;
    const subtotal = product.price * quantity;
    total += subtotal;
    lines.push(quantity + ' x ' + product.name + ' (' + money(product.price) + ' each): ' + money(subtotal));
    const row = document.createElement('div'); row.className = 'basket-item';
    const top = document.createElement('div'); top.className = 'basket-item-top';
    const name = document.createElement('strong'); name.textContent = product.name;
    const price = document.createElement('strong'); price.textContent = money(subtotal);
    top.append(name, price);
    const controls = document.createElement('div'); controls.className = 'basket-item-controls';
    const quantityControl = document.createElement('div'); quantityControl.className = 'quantity';
    const minus = document.createElement('button'); minus.type = 'button'; minus.textContent = '−'; minus.dataset.action = 'minus'; minus.dataset.id = product.id; minus.setAttribute('aria-label', 'Decrease ' + product.name + ' quantity'); minus.disabled = quantity === 1;
    const output = document.createElement('output'); output.textContent = quantity; output.setAttribute('aria-label', product.name + ' quantity');
    const plus = document.createElement('button'); plus.type = 'button'; plus.textContent = '+'; plus.dataset.action = 'plus'; plus.dataset.id = product.id; plus.setAttribute('aria-label', 'Increase ' + product.name + ' quantity'); plus.disabled = quantity === maxQuantity;
    const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'remove'; remove.textContent = 'Remove'; remove.dataset.action = 'remove'; remove.dataset.id = product.id; remove.setAttribute('aria-label', 'Remove ' + product.name + ' from order');
    quantityControl.append(minus, output, plus); controls.append(quantityControl, remove); row.append(top, controls); items.append(row);
  });
  if (!count) { const empty = document.createElement('p'); empty.className = 'empty'; empty.textContent = 'Your basket is empty. Add your favourites from the menu.'; items.append(empty); }
  document.getElementById('basket-count').textContent = count;
  document.getElementById('basket-total').textContent = money(total);
  document.getElementById('mobile-total').textContent = money(total);
  document.getElementById('clear-basket').hidden = !count;
  checkout.classList.toggle('disabled', !count);
  checkout.setAttribute('aria-disabled', String(!count));
  if (count) {
    const message = ['Hi Kota City! I would like to place an order for COLLECTION:', '', ...lines, '', 'Food total: ' + money(total), 'Collection: Duthuni Greenview Car Wash.', 'Opening hours: 09:30–19:30. No delivery.', '', 'Please confirm availability, payment arrangements and my collection time.'].join('\n');
    checkout.href = 'https://wa.me/27637115335?text=' + encodeURIComponent(message);
    checkout.target = '_blank'; checkout.rel = 'noopener noreferrer'; checkout.removeAttribute('tabindex');
  } else { checkout.removeAttribute('href'); checkout.setAttribute('tabindex', '-1'); }
  if (announcement) status.textContent = announcement + ' Basket total ' + money(total) + '.';
}
document.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => {
  const product = products.find(p => p.id === button.dataset.add);
  if (!product) return;
  const current = basket[product.id] || 0;
  if (current >= maxQuantity) { status.textContent = 'Maximum quantity is 99 for ' + product.name + '.'; return; }
  basket[product.id] = current + 1;
  persist(); render(product.name + ' added.');
  button.textContent = 'Added ✓';
  setTimeout(() => { button.textContent = 'Add to order +'; }, 1000);
}));
items.addEventListener('click', event => {
  const button = event.target.closest('button[data-action]');
  if (!button || !items.contains(button)) return;
  const product = products.find(p => p.id === button.dataset.id);
  if (!product || !basket[product.id]) return;
  const action = button.dataset.action;
  if (action === 'remove') delete basket[product.id];
  else basket[product.id] = Math.max(1, Math.min(maxQuantity, basket[product.id] + (action === 'plus' ? 1 : -1)));
  persist(); render(product.name + (action === 'remove' ? ' removed.' : ' quantity updated.'));
  const replacement = items.querySelector('button[data-id="' + product.id + '"][data-action="' + action + '"]:not(:disabled)');
  if (replacement) replacement.focus();
  else if (action === 'remove') document.getElementById('basket-title').setAttribute('tabindex', '-1'), document.getElementById('basket-title').focus();
  else { const fallback = items.querySelector('button[data-id="' + product.id + '"]:not(:disabled)'); if (fallback) fallback.focus(); }
});
document.getElementById('clear-basket').addEventListener('click', () => { products.forEach(p => delete basket[p.id]); persist(); render('Order cleared.'); document.getElementById('basket-title').setAttribute('tabindex','-1'); document.getElementById('basket-title').focus(); });
checkout.addEventListener('click', event => { if (checkout.getAttribute('aria-disabled') === 'true') event.preventDefault(); });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  let count = 0;
  document.querySelectorAll('.card').forEach(card => { card.hidden = button.dataset.filter !== 'All' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
  status.textContent = count + ' menu items shown.';
}));
render();
})();
