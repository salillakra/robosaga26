
import { useMutation } from "@tanstack/react-query";
import axios from "@/lib/axios";

interface UpdateUserRolePayload {
  userId: string;
  role: "admin" | "moderator" | "user";
}

interface UpdateTeamScorePayload {
  teamId: string;
  score: number;
}

export const useUpdateUserRole = () => {
  return useMutation({
    mutationFn: async (payload: UpdateUserRolePayload) => {
      const { data } = await axios.post("/admin/users/role", payload);
      return data;
    },
    onSuccess: () => {
      // Invalidate relevant queries if any, typically we update local state or router refresh in the component
    },
  });
};

export const useUpdateTeamScore = () => {
  return useMutation({
    mutationFn: async (payload: UpdateTeamScorePayload) => {
      const { data } = await axios.post("/admin/teams/score", payload);
      return data;
    },
  });
};
