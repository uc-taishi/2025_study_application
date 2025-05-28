export default function getRoleLevel(roleName: string): string {
    switch (roleName) {
        case "admin":
            return "admin";
        default:
            return "all";
    }
}