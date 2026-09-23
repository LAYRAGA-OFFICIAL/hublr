/* ============================================
   HUBLR - To-Do List Module
   ============================================ */

const Todo = {
    todos: [],

    init() {
        this.todos = Storage.get('todos', []);
        this.render();
        on($('#addTodoBtn'), 'click', () => this.add());
        on($('#todoInput'), 'keydown', (e) => {
            if (e.key === 'Enter') this.add();
        });
        on($('#todoList'), 'click', (e) => {
            const checkbox = e.target.closest('.todo-checkbox');
            if (checkbox) {
                const id = parseInt(checkbox.dataset.id);
                this.toggle(id);
            }
            const del = e.target.closest('.todo-delete');
            if (del) {
                const id = parseInt(del.dataset.id);
                this.remove(id);
            }
        });
    },

    add() {
        const input = $('#todoInput');
        const text = input.value.trim();
        if (!text) return;
        this.todos.push({
            id: Date.now(),
            text: text,
            done: false
        });
        input.value = '';
        this.save();
        this.render();
    },

    toggle(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.done = !todo.done;
            this.save();
            this.render();
        }
    },

    remove(id) {
        this.todos = this.todos.filter((t) => t.id !== id);
        this.save();
        this.render();
    },

    save() {
        Storage.set('todos', this.todos);
    },

    render() {
        const list = $('#todoList');
        if (!list) return;
        if (this.todos.length === 0) {
            list.innerHTML = `<p class="empty-state">${I18n.t('noTodos') || 'Belum ada tugas'}</p>`;
            return;
        }
        list.innerHTML = this.todos.map((t) => `
            <div class="todo-item ${t.done ? 'done' : ''}">
                <input type="checkbox" class="todo-checkbox" data-id="${t.id}" ${t.done ? 'checked' : ''}>
                <span class="todo-text">${Helpers.escapeHtml(t.text)}</span>
                <button class="todo-delete" data-id="${t.id}" title="Hapus">✕</button>
            </div>
        `).join('');
    }
};