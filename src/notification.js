/**
 * Notification component.
 *
 * This component creates a notification element at a specified position on the screen
 * and automatically hides it after a given timeout period.
 *
 * @class
 */
export default class Notification {
	icons = {
		success: './check-circle.svg',
		info: './info-circle.svg',
		warning: './exclamation-triangle.svg',
		error: './times-circle.svg',
		cross: './cross.svg',
	};

	/**
	 * Creates an instance of Notification.
	 *
	 * @constructor
	 *  @param {'top-left'|'top-right'|'bottom-left'|'bottom-right'|'top-center'|'bottom-center'} position - The position on the screen where the notification should appear.
	 * @param {number} timeout - The time in milliseconds after which the notification will automatically hide.
	 */
	constructor(position, timeout) {
		this.position = position;
		this.timeout = timeout;
		this.createRoot(position);
	}

	createRoot(position) {
		const classes = 'absolute z-10';
		const positions = {
			'top-left': 'top-5 left-5',
			'top-right': 'top-5 right-5',
			'bottom-left': 'bottom-5 left-5',
			'bottom-right': 'bottom-5 right-5',
			'top-center': 'top-5 left-1/2 -translate-x-1/2',
			'bottom-center': 'bottom-5 left-1/2 -translate-x-1/2',
		};

		this.root = document.createElement('ul');
		this.root.classList.add(...positions[position].split(' '), ...classes.split(' '));

		document.body.append(this.root);
	}

	removeNotification(notification, notificationContainer, timelineContainer) {
		timelineContainer.remove();
		notificationContainer.style.height = 0;
		notificationContainer.style.marginBottom = 0;
		notification.classList.remove('opacity-100');

		setTimeout(() => {
			notificationContainer.remove();
		}, 300);
	}

	createNotification(type, message) {
		const types = {
			success: 'border-green-500',
			info: 'border-blue-500',
			warning: 'border-amber-500',
			error: 'border-red-500',
		};

		const notificationClasses =
			'absolute top-0 left-0 opacity-0 w-full flex items-center gap-2 shadow-md py-6 px-3 bg-white text-lg ease duration-500';
		const notificationContainerClasses =
			'notification-item w-[400px] [&:not(:last-child)]:mb-5 relative h-0 rounded-xl overflow-hidden duration-500';
		const removeButtonClasses = 'relative ml-auto p-2 z-10';
		const timelineClasses = 'absolute bottom-0 left-0 w-full h-[10px] animate-timeline overflow-hidden';
		const timelineContainerClasses = 'border-b-4 -translate-y-[calc(100%_-_10px)] rounded-xl';

		const timeline = document.createElement('div');
		const timelineContainer = document.createElement('div');
		const notification = document.createElement('div');
		const notificationContainer = document.createElement('li');
		const imageUrl = this.icons[type];
		const icon = document.createElement('img');
		const removeIcon = document.createElement('img');
		const removeButton = document.createElement('button');

		removeIcon.src = this.icons['cross'];
		removeIcon.alt = 'Icon cross';
		icon.src = imageUrl;
		icon.alt = `Icon ${type}`;
		notification.textContent = message;

		timeline.classList.add(...timelineClasses.split(' '));
		timeline.style.animationDuration = this.timeout + 'ms';
		timelineContainer.classList.add(...timelineContainerClasses.split(' '), types[type]);
		removeButton.classList.add(...removeButtonClasses.split(' '));
		notification.classList.add(...notificationClasses.split(' '));
		notificationContainer.classList.add(...notificationContainerClasses.split(' '));

		removeButton.addEventListener('click', () => {
			this.removeNotification(notification, notificationContainer, timelineContainer);
		});

		notification.prepend(icon);
		removeButton.append(removeIcon);
		notification.append(removeButton);
		notificationContainer.append(notification);
		timeline.append(timelineContainer);
		notificationContainer.append(timeline);

		setTimeout(() => {
			notification.classList.add('opacity-100');
		}, 50);

		return { notificationContainer, notification, timelineContainer, timeline };
	}

	render(type, message) {
		const { notification, notificationContainer, timelineContainer, timeline } = this.createNotification(type, message);
		this.root.prepend(notificationContainer);

		notificationContainer.style.height = notification.clientHeight + 'px';
		timelineContainer.style.width = notification.clientWidth + 'px';
		timelineContainer.style.height = notification.clientHeight + 'px';

		let mouseEnter = false;

		notificationContainer.addEventListener('mouseenter', () => {
			mouseEnter = true;
		});

		notificationContainer.addEventListener('mouseleave', () => {
			mouseEnter = false;
		});

		let currentTime = 0;
		setInterval(() => {
			if (!mouseEnter) {
				currentTime += 100;
				timeline.style.animationPlayState = 'running';
			} else {
				timeline.style.animationPlayState = 'paused';
			}

			if (currentTime >= this.timeout) {
				this.removeNotification(notification, notificationContainer, timelineContainer);
			}
		}, 100);
	}
}
