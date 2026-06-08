import { Briefcase, Award, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        
        {/* Work Experience Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-charcoal dark:text-offwhite" />
            <h2 className="text-3xl font-bold tracking-tight">Experience.</h2>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-800 before:to-transparent">
            
            {/* Skin Lesion ML Intern */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-charcoal bg-offwhite-card dark:bg-[#151515] text-muted shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-[#151515] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-charcoal dark:text-offwhite">ML Research Intern</h3>
                  <span className="text-xs font-semibold text-muted bg-offwhite-card dark:bg-charcoal px-2 py-1 rounded-md mt-2 sm:mt-0">Dec '24 - Mar '25</span>
                </div>
                <p className="text-sm font-medium text-muted mb-3">Skin Lesion Classification • VIT Vellore</p>
                <ul className="text-sm text-muted space-y-2 list-disc ml-4">
                  <li>Engineered a data pipeline for 10,015 high-res images, optimizing batch loading.</li>
                  <li>Built and evaluated a PyTorch ResNet-50 CNN classifier, managing hyperparameter tuning for severe class imbalance.</li>
                </ul>
              </div>
            </div>

            {/* Crop Recommendation Intern */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-charcoal bg-offwhite-card dark:bg-[#151515] text-muted shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-[#151515] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-charcoal dark:text-offwhite">ML Research Intern</h3>
                  <span className="text-xs font-semibold text-muted bg-offwhite-card dark:bg-charcoal px-2 py-1 rounded-md mt-2 sm:mt-0">May '24 - Jul '24</span>
                </div>
                <p className="text-sm font-medium text-muted mb-3">Crop Recommendation System • VIT Vellore</p>
                <ul className="text-sm text-muted space-y-2 list-disc ml-4">
                  <li>Developed Python backend processing 22 categories of agricultural sensor data.</li>
                  <li>Optimized inference latency between Random Forest and Gradient Boosting algorithms.</li>
                  <li>Exposed model as a scalable REST API using Flask.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Certifications Section */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-charcoal dark:text-offwhite" />
            <h2 className="text-3xl font-bold tracking-tight">Certifications.</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="p-5 bg-white dark:bg-[#151515] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <h3 className="font-bold text-charcoal dark:text-offwhite mb-1">AWS Certified Cloud Practitioner</h3>
              <p className="text-sm text-muted">Amazon Web Services</p>
            </div>
            <div className="p-5 bg-white dark:bg-[#151515] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <h3 className="font-bold text-charcoal dark:text-offwhite mb-1">Azure Administrator (AZ-104)</h3>
              <p className="text-sm text-muted">Microsoft Certified</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}