"use client";
export default function Page() {
  const a = ["100px", "200px"];
  function changeButton(e) {
    e.preventDefault();

    const bar = document.getElementsByClassName("bar");
    let temp = bar[0].style.height;
    bar[0].style.height = bar[1].style.height;
    bar[1].style.height = temp;
  }

  return (
    <div className="flex justify-center space-x-2 mt-8">
      {a.map((v) => (
        <div
          className="bar"
          style={{ width: `2px`, height: v, backgroundColor: "white" }}
        />
      ))}
      <button onClick={changeButton}>change</button>
    </div>
  );
}
