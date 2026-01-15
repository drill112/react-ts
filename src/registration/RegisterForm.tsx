import { useState } from "react";

function RegisterForm() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [specialization, setSpecialization] = useState<string[]>([]);
  const [position, setPosition] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleSpecializationChange(value: string) {
    if (specialization.includes(value)) {
      setSpecialization(specialization.filter(item => item !== value));
    } else {
      setSpecialization([...specialization, value]);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !login ||
      !password ||
      !confirm ||
      !fullName ||
      !gender ||
      specialization.length === 0 ||
      !position
    ) {
      alert("Заполните все поля формы");
      return;
    }

    if (password.length < 3 || password.length > 10) {
      alert("Пароль должен быть от 3 до 10 символов");
      return;
    }

    if (password !== confirm) {
      alert("Пароль и подтверждение не совпадают");
      return;
    }

    setSubmitted(true);
  }

  function handleReset() {
    setLogin("");
    setPassword("");
    setConfirm("");
    setFullName("");
    setGender("");
    setSpecialization([]);
    setPosition("");
    setSubmitted(false);
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Логин:</label>
          <input value={login} onChange={e => setLogin(e.target.value)} />
        </div>

        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Подтверждение:</label>
          <input
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
          />
        </div>

        <div>
          <label>Полное имя:</label>
          <input
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label>Пол:</label>
          <label>
            <input
              type="radio"
              value="М"
              checked={gender === "М"}
              onChange={e => setGender(e.target.value)}
            />
            М
          </label>
          <label>
            <input
              type="radio"
              value="Ж"
              checked={gender === "Ж"}
              onChange={e => setGender(e.target.value)}
            />
            Ж
          </label>
        </div>

        <div>
          <label>Специализация:</label>
          <label>
            <input
              type="checkbox"
              checked={specialization.includes("Дизайн")}
              onChange={() => handleSpecializationChange("Дизайн")}
            />
            Дизайн
          </label>
          <label>
            <input
              type="checkbox"
              checked={specialization.includes("Программирование")}
              onChange={() =>
                handleSpecializationChange("Программирование")
              }
            />
            Программирование
          </label>
          <label>
            <input
              type="checkbox"
              checked={specialization.includes("Администрирование")}
              onChange={() =>
                handleSpecializationChange("Администрирование")
              }
            />
            Администрирование
          </label>
        </div>

        <div>
          <label>Должность:</label>
          <select
            value={position}
            onChange={e => setPosition(e.target.value)}
          >
            <option value="">-- Выберите --</option>
            <option>Директор</option>
            <option>Заместитель директора</option>
            <option>Руководитель проекта</option>
            <option>Начальник отдела</option>
            <option>Программист</option>
            <option>Дизайнер</option>
            <option>Консультант</option>
            <option>Служащий</option>
          </select>
        </div>

        <div>
          <button type="submit">Регистрация</button>
          <button type="button" onClick={handleReset}>
            Сброс
          </button>
        </div>
      </form>

      {submitted && (
        <table>
          <tbody>
            <tr>
              <td>Логин</td>
              <td>{login}</td>
            </tr>
            <tr>
              <td>ФИО</td>
              <td>{fullName}</td>
            </tr>
            <tr>
              <td>Пол</td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td>Специализация</td>
              <td>{specialization.join(", ")}</td>
            </tr>
            <tr>
              <td>Должность</td>
              <td>{position}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RegisterForm;
