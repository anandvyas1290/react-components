// import "./styles.scss";

const dom = document.createElement("div");

function Message() {
    dom.classList.add("message");
    window.onload = () => document.body.appendChild(dom);
}

Message.prototype.show = function (
    content,
    duration = 4000,
    type = "info",
    onClose = Function.prototype
) {
    const contentBox = document.createElement("div");
    const contentText = document.createElement("span");
    // const icon = document.createElement("i");
    // icon.classList.add(type);
    // icon.classList.add("message-icon");
    contentText.innerText = content;
    contentBox.classList.add("content-box");
    contentBox.classList.add(`${type}-custom-message`);
    contentBox.classList.add("animate-in");
    // contentBox.appendChild(icon);
    contentBox.appendChild(contentText);
    contentBox.style.top = `${this.count * 42}px`;
    dom.appendChild(contentBox);

    this.count++;

    // remove message box after duration
    setTimeout(() => {
        contentBox.classList.add("animate-out");
        setTimeout(() => {
            dom.removeChild(contentBox);

            const boxes = document.querySelectorAll(".content-box");
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].style.top = `${
                    parseInt(boxes[i].style.top, 10) - 50
                }px`;
            }
            this.count--;

            if (typeof onClose === "function") onClose();
        }, 300);
    }, duration);
};

// API
["success", "error", "warn", "info"].map((method) => {
    return (Message.prototype[method] = function (content, duration, onClose) {
        this.show(content, duration, method, onClose);
    });
});

// the count of messages already exist
Message.prototype.count = 0;

export default new Message();