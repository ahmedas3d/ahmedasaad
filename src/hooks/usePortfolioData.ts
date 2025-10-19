import { useState, useEffect } from 'react';
import {
  fetchProjects,
  fetchSkills,
  fetchPersonalInfo,
  fetchSocialLinks,
  fetchAchievements,
  fetchFeaturedProjects,
  fetchProjectById,
  fetchSkillsByCategory,
} from '../services/api';
import { Project } from '../data/projects';
import { Skill } from '../data/skills';
import { PersonalInfo, SocialLink, Achievement } from '../data/personal';

// ===========================
// PROJECTS HOOKS
// ===========================

/**
 * Hook to fetch all projects
 */
export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        setLoading(true);
        const data = await fetchProjects();
        if (isMounted) {
          setProjects(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, loading, error };
}

/**
 * Hook to fetch featured projects
 */
export function useFeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        setLoading(true);
        const data = await fetchFeaturedProjects();
        if (isMounted) {
          setProjects(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, loading, error };
}

/**
 * Hook to fetch a single project by ID
 */
export function useProject(id: string | undefined) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProject() {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await fetchProjectById(id);
        if (isMounted) {
          setProject(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadProject();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { project, loading, error };
}

// ===========================
// SKILLS HOOKS
// ===========================

/**
 * Hook to fetch all skills
 */
export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadSkills() {
      try {
        setLoading(true);
        const data = await fetchSkills();
        if (isMounted) {
          setSkills(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadSkills();

    return () => {
      isMounted = false;
    };
  }, []);

  return { skills, loading, error };
}

/**
 * Hook to fetch skills by category
 */
export function useSkillsByCategory(category: string) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadSkills() {
      try {
        setLoading(true);
        const data = await fetchSkillsByCategory(category);
        if (isMounted) {
          setSkills(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadSkills();

    return () => {
      isMounted = false;
    };
  }, [category]);

  return { skills, loading, error };
}

// ===========================
// PERSONAL INFO HOOKS
// ===========================

/**
 * Hook to fetch personal information
 */
export function usePersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPersonalInfo() {
      try {
        setLoading(true);
        const data = await fetchPersonalInfo();
        if (isMounted) {
          setPersonalInfo(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPersonalInfo();

    return () => {
      isMounted = false;
    };
  }, []);

  return { personalInfo, loading, error };
}

// ===========================
// SOCIAL LINKS HOOKS
// ===========================

/**
 * Hook to fetch social links
 */
export function useSocialLinks() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadSocialLinks() {
      try {
        setLoading(true);
        const data = await fetchSocialLinks();
        if (isMounted) {
          setSocialLinks(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadSocialLinks();

    return () => {
      isMounted = false;
    };
  }, []);

  return { socialLinks, loading, error };
}

// ===========================
// ACHIEVEMENTS HOOKS
// ===========================

/**
 * Hook to fetch achievements
 */
export function useAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadAchievements() {
      try {
        setLoading(true);
        const data = await fetchAchievements();
        if (isMounted) {
          setAchievements(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadAchievements();

    return () => {
      isMounted = false;
    };
  }, []);

  return { achievements, loading, error };
}

// ===========================
// COMBINED HOOK
// ===========================

/**
 * Hook to fetch all portfolio data at once
 */
export function usePortfolioData() {
  const { projects, loading: projectsLoading, error: projectsError } = useProjects();
  const { skills, loading: skillsLoading, error: skillsError } = useSkills();
  const { personalInfo, loading: personalInfoLoading, error: personalInfoError } = usePersonalInfo();
  const { socialLinks, loading: socialLinksLoading, error: socialLinksError } = useSocialLinks();
  const { achievements, loading: achievementsLoading, error: achievementsError } = useAchievements();

  const loading = projectsLoading || skillsLoading || personalInfoLoading || socialLinksLoading || achievementsLoading;
  const error = projectsError || skillsError || personalInfoError || socialLinksError || achievementsError;

  return {
    projects,
    skills,
    personalInfo,
    socialLinks,
    achievements,
    loading,
    error,
  };
}
