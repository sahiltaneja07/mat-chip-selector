import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  FormControlLabel,
  Switch,
  Alert,
  Tabs,
  Tab,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Chip,
  Stack,
} from '@mui/material';
import { 
  Star, 
  Heart, 
  Zap, 
  Coffee,
  Github,
  Package,
  Code2,
  Palette,
  Settings,
  Users,
} from 'lucide-react';
import type { SelectOption } from '../MatChipsSelector/models/SelectOption.model';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

const programmingLanguages: SelectOption[] = [
  { value: 'javascript', label: 'JavaScript', icon: <Code2 size={16} /> },
  { value: 'typescript', label: 'TypeScript', icon: <Code2 size={16} /> },
  { value: 'python', label: 'Python', icon: <Code2 size={16} /> },
  { value: 'rust', label: 'Rust', icon: <Code2 size={16} /> },
  { value: 'go', label: 'Go', icon: <Code2 size={16} /> },
  { value: 'java', label: 'Java', icon: <Code2 size={16} /> },
];

const frameworks: SelectOption[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt' },
];

const teamMembers: SelectOption[] = [
  { value: 'alice', label: 'Alice Johnson', icon: <Users size={16} /> },
  { value: 'bob', label: 'Bob Smith', icon: <Users size={16} /> },
  { value: 'charlie', label: 'Charlie Brown', icon: <Users size={16} /> },
  { value: 'diana', label: 'Diana Prince', icon: <Users size={16} /> },
  { value: 'eve', label: 'Eve Wilson', icon: <Users size={16} /> },
];

const priorities: SelectOption[] = [
  { value: 'low', label: 'Low Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'high', label: 'High Priority' },
  { value: 'critical', label: 'Critical', disabled: true },
];

const categories: SelectOption[] = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'devops', label: 'DevOps' },
  { value: 'design', label: 'Design' },
  { value: 'testing', label: 'Testing' },
  { value: 'security', label: 'Security' },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`demo-tabpanel-${index}`}
      aria-labelledby={`demo-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export const Index = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
              <Chip label="v1.0.0" size="small" color="primary" />
              <Chip label="MUI 5+" size="small" variant="outlined" />
              <Chip label="React 18+" size="small" variant="outlined" />
            </Stack>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Mat Chips Selector
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}
            >
              A beautiful, animated MUI component that seamlessly combines Chips and Select 
              functionality with smooth transitions.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Chip
                icon={<Github size={16} />}
                label="View on GitHub"
                clickable
                component="a"
                href="https://github.com"
                target="_blank"
                sx={{ px: 1 }}
              />
              <Chip
                icon={<Package size={16} />}
                label="npm install"
                variant="outlined"
                sx={{ px: 1 }}
              />
            </Stack>
          </Box>

          <Paper elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', mb: 4 }}>
            <Tabs
              value={tabValue}
              onChange={(_, newValue) => setTabValue(newValue)}
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                bgcolor: 'grey.50',
              }}
            >
              <Tab icon={<Zap size={18} />} label="Basic" iconPosition="start" />
              <Tab icon={<Settings size={18} />} label="Advanced" iconPosition="start" />
              <Tab icon={<Palette size={18} />} label="Customization" iconPosition="start" />
            </Tabs>
          </Paper>

          <Paper elevation={0} sx={{ borderRadius: 3, p: 4, mb: 4 }}>
            <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
              Quick Start
            </Typography>
            <Alert severity="info" sx={{ mb: 3 }}>
              Copy the MatChipsSelector component folder to your project and import it directly.
            </Alert>
            <Box
              sx={{
                bgcolor: 'grey.900',
                color: 'grey.100',
                p: 3,
                borderRadius: 2,
                fontFamily: 'monospace',
                fontSize: 14,
                overflow: 'auto',
              }}
            >
              <Box component="pre" sx={{ m: 0 }}>
                {`import { MatChipsSelector } from './components/MatChipsSelector';

                const options = [
                { value: 'react', label: 'React' },
                { value: 'vue', label: 'Vue.js' },
                { value: 'angular', label: 'Angular' },
                ];

                <MatChipsSelector
                options={options}
                multiple
                searchable
                placeholder="Select frameworks"
                onChange={(value) => console.log(value)}
                />`}
              </Box>
            </Box>
          </Paper>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mb: 4 }}>
            {[
              { icon: <Zap size={24} />, title: 'Smooth Animations', desc: 'Framer Motion powered transitions between chip and select states' },
              { icon: <Star size={24} />, title: 'Full MUI Integration', desc: 'Built on MUI components with full theme support' },
              { icon: <Heart size={24} />, title: 'TypeScript Ready', desc: 'Complete TypeScript definitions for all props and options' },
              { icon: <Settings size={24} />, title: 'Highly Configurable', desc: 'Customize colors, variants, sizes, and behaviors' },
              { icon: <Coffee size={24} />, title: 'Easy to Use', desc: 'Simple API with sensible defaults' },
              { icon: <Code2 size={24} />, title: 'Modular Design', desc: 'Use individual sub-components for custom implementations' },
            ].map((feature, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.desc}
                </Typography>
              </Paper>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', pt: 4 }}>
            <Typography variant="body2" color="text.secondary">
              Built with ❤️ using React + MUI + Framer Motion
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
