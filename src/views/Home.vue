<template>
  <div class="home">
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Statistics Homework Collection</h1>
        <p class="hero-subtitle">Organized collection of statistics homework assignments and materials</p>
      </div>
      
      <div class="homework-grid">
        <div 
          v-for="homework in homeworkList" 
          :key="homework.id"
          class="homework-card"
          @click="viewHomework(homework.id)"
        >
          <div class="homework-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" class="icon">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
          </div>
          <div class="homework-content">
            <h3 class="homework-title">{{ homework.title }}</h3>
            <p class="homework-description">{{ homework.description }}</p>
            <div class="homework-files">
              <span class="file-count">{{ homework.fileCount }} files</span>
            </div>
          </div>
          <div class="homework-arrow">
            <svg viewBox="0 0 24 24" fill="currentColor" class="arrow-icon">
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      homeworkList: [
        {
          id: 1,
          title: 'HW 1',
          description: 'Mean derivation and simulation',
          fileCount: 5
        },
        {
          id: 2,
          title: 'HW 2',
          description: 'Welford\'s Recursion',
          fileCount: 4
        },
        {
          id: 3,
          title: 'HW 3',
          description: 'Absolute Deviations and GLM',
          fileCount: 13
        },
        {
          id: 4,
          title: 'HW 4',
          description: 'Statistical Independence',
          fileCount: 3
        },
        {
          id: 5,
          title: 'HW 5',
          description: 'Cauchy Inequality',
          fileCount: 15
        },
        {
          id: 6,
          title: 'HW 6',
          description: 'Fundamental Theorem of Calculus',
          fileCount: 10
        },
        {
          id: 7,
          title: 'HW 7',
          description: 'Sampling Averages Simulation',
          fileCount: 1
        },
        {
          id: 8,
          title: 'HW 8',
          description: 'Shannon Entropy',
          fileCount: 5
        },
        {
          id: 9,
          title: 'HW 9',
          description: 'Sampling',
          fileCount: 23
        },
        {
          id: 10,
          title: 'HW 10',
          description: 'Advanced Statistics Concepts',
          fileCount: 11
        }
      ]
    }
  },
  methods: {
    viewHomework(id) {
      this.$router.push(`/homework/${id}`)
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem 0;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
}

.homework-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.homework-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.homework-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: #667eea;
}

.homework-icon {
  color: #667eea;
  flex-shrink: 0;
}

.icon {
  width: 48px;
  height: 48px;
}

.homework-content {
  flex: 1;
}

.homework-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.homework-description {
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.homework-files {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.file-count {
  background-color: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.homework-arrow {
  color: #cbd5e1;
  flex-shrink: 0;
}

.arrow-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.homework-card:hover .arrow-icon {
  transform: translateX(4px);
  color: #667eea;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .homework-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .homework-card {
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .icon {
    width: 36px;
    height: 36px;
  }
}
</style>
