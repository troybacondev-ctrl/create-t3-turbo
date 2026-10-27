import { Text, View } from "react-native";

type ConnectionStatusProps = {
  status: "loading" | "error" | "ready";
};

const statusCopy = {
  loading: {
    label: "Loading posts",
    className: "bg-muted text-muted-foreground",
  },
  error: {
    label: "Could not reach the API",
    className: "bg-destructive/15 text-destructive",
  },
  ready: {
    label: "Connected",
    className: "bg-primary/15 text-primary",
  },
} as const;

export function ConnectionStatus({ status }: ConnectionStatusProps) {
  const copy = statusCopy[status];

  return (
    <View className={`self-center rounded-full px-3 py-1 ${copy.className}`}>
      <Text className="text-xs font-semibold">{copy.label}</Text>
    </View>
  );
}
