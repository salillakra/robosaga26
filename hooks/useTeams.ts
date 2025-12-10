import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "@/lib/axios";

interface TeamMember {
  userId: string;
  userName: string | null;
  userEmail: string | null;
  userImage: string | null;
}

interface Team {
  id: number;
  name: string;
  slug: string;
  createdAt: Date;
  members: TeamMember[];
}

// Fetch user's team
export const useUserTeam = () => {
  return useQuery({
    queryKey: ["userTeam"],
    queryFn: async () => {
      const { data } = await axios.get("/teams/user/me");
      return data.team as Team | null;
    },
  });
};

// Create team mutation
export const useCreateTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (teamName: string) => {
      const { data } = await axios.post("/teams/create", { teamName });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userTeam"] });
    },
  });
};

// Join team mutation
export const useJoinTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (slug: string) => {
      const { data } = await axios.post("/teams/join", { slug });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userTeam"] });
    },
  });
};
