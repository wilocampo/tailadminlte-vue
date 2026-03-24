import { ref, computed } from 'vue'
import type { TodoItem } from '@/types'

export type TodoFilter = 'all' | 'active' | 'completed'

export function useTodoList(initialItems: TodoItem[] = []) {
  const items = ref<TodoItem[]>([...initialItems])
  const newItem = ref('')
  const filter = ref<TodoFilter>('all')
  let nextId = initialItems.length > 0
    ? Math.max(...initialItems.map((item) => item.id)) + 1
    : 1

  const filtered = computed<TodoItem[]>(() => {
    if (filter.value === 'active') return items.value.filter((item) => !item.done)
    if (filter.value === 'completed') return items.value.filter((item) => item.done)
    return items.value
  })

  const remaining = computed<number>(() =>
    items.value.filter((item) => !item.done).length,
  )

  function addItem(): void {
    const text = newItem.value.trim()
    if (!text) return
    items.value.push({
      id: nextId++,
      text,
      done: false,
      color: '',
      priority: 'medium',
    })
    newItem.value = ''
  }

  function removeItem(id: number): void {
    items.value = items.value.filter((item) => item.id !== id)
  }

  function toggleItem(id: number): void {
    const item = items.value.find((item) => item.id === id)
    if (item) item.done = !item.done
  }

  function clearCompleted(): void {
    items.value = items.value.filter((item) => !item.done)
  }

  return {
    items,
    filtered,
    remaining,
    filter,
    newItem,
    addItem,
    removeItem,
    toggleItem,
    clearCompleted,
  }
}
