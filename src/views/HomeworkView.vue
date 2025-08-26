<template>
  <div class="homework-view">
    <div class="container">
      <div class="breadcrumb">
        <router-link to="/" class="breadcrumb-link">
          <svg viewBox="0 0 24 24" fill="currentColor" class="breadcrumb-icon">
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
          </svg>
          Back to Home
        </router-link>
      </div>
      
      <div class="homework-header">
        <h1 class="homework-title">{{ currentHomework.title }}</h1>
        <p class="homework-description">{{ currentHomework.description }}</p>
        

      </div>
      
      <!-- HTML File Content Display -->
      <div class="html-content-section" v-if="hasHtml">
        <div v-for="file in htmlFiles" :key="file.name" class="html-content-item">
          <iframe :src="file.url" class="html-iframe" frameborder="0"></iframe>
        </div>
      </div>
      
      <!-- File Display Section -->
      <div class="files-section" v-if="currentHomework.files && currentHomework.files.length > 0">
        <h2 class="section-title">Files</h2>
        
        <!-- Image Gallery -->
        <div class="image-gallery" v-if="hasImages">
          <h3>Images</h3>
          <div class="gallery-grid">
            <a 
              v-for="file in imageFiles" 
              :key="file.name"
              :href="file.url"
              target="_blank"
              class="image-item"
            >
              <img :src="file.url" :alt="file.name" class="gallery-image" @error="handleImageError" />
              <div class="image-overlay">
                <span class="image-name">{{ file.name }}</span>
              </div>
            </a>
          </div>
        </div>
        
        <!-- Document Files -->
        <div class="documents-section" v-if="hasDocuments">
          <h3>Documents</h3>
          <div class="documents-grid">
            <a 
              v-for="file in documentFiles" 
              :key="file.name"
              :href="file.url"
              target="_blank"
              class="document-item"
            >
              <div class="document-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" class="doc-svg">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <div class="document-info">
                <h4 class="document-name">{{ file.name }}</h4>
                <p class="document-size">{{ file.size }}</p>
              </div>
            </a>
          </div>
        </div>
        

      </div>
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'HomeworkView',
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      homeworkData: {
        1: {
          title: 'HW 1',
          description: 'Mean derivation and simulation',
          files: [
            { name: '1.pdf', type: 'document', size: '2.1 MB', url: '/Statistics-homework/Homework1/1.pdf' },
            { name: 'simulation.html', type: 'html', size: '12 KB', url: '/Statistics-homework/Homework1/simulation.html' }
          ]
        },
        2: {
          title: 'HW 2',
          description: 'Welford\'s Recursion',
          files: [
            { name: 'WelfordsRecursion.html', type: 'html', size: '20 KB', url: '/Statistics-homework/Homework2/WelfordsRecursion.html' },
            { name: 'WelfordsRecursion.pdf', type: 'document', size: '196 KB', url: '/Statistics-homework/Homework2/WelfordsRecursion.pdf' }
          ]
        },
        3: {
          title: 'HW 3',
          description: 'Absolute Deviations and GLM',
          files: [
            { name: 'AbsoluteDeviations.PDF', type: 'document', size: '134 KB', url: '/Statistics-homework/Homework3/AbsoluteDeviations.pdf' },
            { name: 'ContinuousTimeAttackSimulator.html', type: 'html', size: '23 KB', url: '/Statistics-homework/Homework3/ContinuousTimeAttackSimulator.html' },
          ]
        },
        4: {
          title: 'HW 4',
          description: 'Statistical Independence',
          files: [
            { name: 'StatisticalIndependence.html', type: 'html', size: '34 KB', url: '/Statistics-homework/Homework4/StatisticalIndependence.html' },
            { name: 'StatisticalIndependence.pdf', type: 'document', size: '1.8 MB', url: '/Statistics-homework/Homework4/StatisticalIndependence.pdf' }
          ]
        },
        5: {
          title: 'HW 5',
          description: 'Cauchy Inequality',
          files: [
            { name: 'Cauchy-inequality.html', type: 'html', size: '45 KB', url: '/Statistics-homework/Homework5/Cauchy-inequality.html' },
            { name: 'Cauchy inequality.pdf', type: 'document', size: '1.2 MB', url: '/Statistics-homework/Homework5/Cauchy inequality.pdf' },
          ]
        },
        6: {
          title: 'HW 6',
          description: 'Fundamental Theorem of Calculus',
          files: [
            { name: 'FTCandCDF.html', type: 'html', size: '34 KB', url: '/Statistics-homework/Homework6/FTCandCDF.html' },
            { name: 'FundamentalTheoremofCalculus.pdf', type: 'document', size: '1.8 MB', url: '/Statistics-homework/Homework6/FundamentalTheoremofCalculus.pdf' },
          ]
        },
        7: {
          title: 'HW 7',
          description: 'Sampling Averages Simulation',
          files: [
            { name: 'SamplingAveragesSimulation.html', type: 'html', size: '45 KB', url: '/Statistics-homework/Homework7/SamplingAveragesSimulation.html' }
          ]
        },
        8: {
          title: 'HW 8',
          description: 'Shannon Entropy',
          files: [
            { name: 'ShannonEntropy.html', type: 'html', size: '45 KB', url: '/Statistics-homework/Homework8/ShannonEntropy.html' },
            { name: 'ShannonEntropy.pdf', type: 'document', size: '1.5 MB', url: '/Statistics-homework/Homework8/ShannonEntropy.pdf' },
          ]
        },
        9: {
          title: 'HW 9',
          description: 'Sampling',
          files: [
            { name: 'Sampling.html', type: 'html', size: '45 KB', url: '/Statistics-homework/Homework9/Sampling.html' },
            { name: 'Sampling.pdf', type: 'document', size: '1.8 MB', url: '/Statistics-homework/Homework9/Sampling.pdf' },
          ]
        },
        10: {
          title: 'HW 10',
          description: 'Advanced Statistics Concepts',
          files: [
          { name: 'Homework10.html', type: 'html', size: '45 KB', url: '/Statistics-homework/Homework10/Homework10.html' },
          { name: 'Homework10.pdf', type: 'document', size: '1.8 MB', url: '/Statistics-homework/Homework10/Homework10.pdf' },
          ]
        }
      }
    }
  },
  computed: {
    currentHomework() {
      const homework = this.homeworkData[this.id] || {
        title: 'Homework Not Found',
        description: 'The requested homework could not be found.',
        githubLink: null,
        files: []
      }
      console.log('Current homework:', homework)
      return homework
    },
    imageFiles() {
      const images = this.currentHomework.files.filter(file => file.type === 'image')
      console.log('Image files:', images)
      return images
    },
    documentFiles() {
      return this.currentHomework.files.filter(file => file.type === 'document')
    },
    htmlFiles() {
      return this.currentHomework.files.filter(file => file.type === 'html')
    },
    hasImages() {
      return this.imageFiles.length > 0
    },
    hasDocuments() {
      return this.documentFiles.length > 0
    },
    hasHtml() {
      return this.htmlFiles.length > 0
    }
  },
  methods: {



    openHtml(file) {
      window.open(file.url, '_blank')
    },
    handleImageError(event) {
      console.error('Image failed to load:', event.target.src)
      // You could set a fallback image here
      event.target.style.display = 'none'
    }
  }
}
</script>

<style scoped>
.homework-view {
  padding: 2rem 0;
}

.breadcrumb {
  margin-bottom: 2rem;
}

.breadcrumb-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #5a67d8;
}

.breadcrumb-icon {
  width: 20px;
  height: 20px;
}

.homework-header {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  text-align: center;
}

.homework-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.homework-description {
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.6;
}



.files-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 2rem;
  text-align: center;
}

.files-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
}

/* Image Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.image-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  display: block;
}

.image-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.image-item:hover .image-overlay {
  transform: translateY(0);
}

.image-name {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Documents Grid */
.documents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.document-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.document-item:hover {
  border-color: #667eea;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.document-icon {
  color: #667eea;
  flex-shrink: 0;
}

.doc-svg {
  width: 32px;
  height: 32px;
}

.document-info {
  flex: 1;
}

.document-name {
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.document-size {
  color: #64748b;
  font-size: 0.875rem;
}



/* HTML Content Display */
.html-content-section {
  margin-top: 2rem;
}

.html-content-item {
  margin-bottom: 2rem;
}

.html-iframe {
  width: 100%;
  height: 600px;
  border: none;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}



@media (max-width: 768px) {
  .homework-title {
    font-size: 2rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .gallery-image {
    height: 150px;
  }
  
  .documents-grid {
    grid-template-columns: 1fr;
  }
  
  .html-iframe {
    height: 400px;
  }
}
</style>
