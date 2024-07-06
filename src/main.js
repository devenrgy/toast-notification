import './index.css';
import Notification from './notification';

const container = document.querySelector('.container');

const notification = new Notification('top-right', 4000);

container.addEventListener('click', (e) => {
	if (e.target.type === 'button') {
		const title = e.target.textContent;
		const type = title.toLowerCase();
		notification.render(type, `${title} toast notification`);
	}
});
