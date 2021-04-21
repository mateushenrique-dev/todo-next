import styles from './configs-style.module.scss'

export default function() {
  return (
    <section className={styles.configs}>
      <p>5 items left</p>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear Completed</button>
    </section>
  )
}