class RememberMeInfo {
  private readonly key = "rememberMe";

  save(data: any) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  get() {
    const values = localStorage.getItem(this.key);

    return values
      ? JSON.parse(values)
      : { email: "", password: "", check: false };
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}

export default new RememberMeInfo();
