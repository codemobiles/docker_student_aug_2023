import React from "react";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <ul>
        {["angular", "react", "vue"].map((e: string) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
