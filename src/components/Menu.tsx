interface MenuProps {
  position: "top" | "bottom" | "left" | "right";
  width: string;
  height: string;
  alignment: "left" | "top" | "center";
  children: React.ReactChildren;
}
/**
 * Defaults top full width top menu
 * @param position
 * @param width
 * @param height
 * @param alignment
 * @returns Menu component
 */
export default function Menu({
  position = "top",
  width = "100%",
  height = "auto",
  alignment = "center",
  children,
}: MenuProps) {
  const config = `${position}-0`;

  return (
    <div className={`fixed z-20 bg-white ${config}`} style={{ width, height }}>
      {children}
    </div>
  );
}
