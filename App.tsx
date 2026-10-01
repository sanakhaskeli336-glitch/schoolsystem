import React, { useState } from 'react';
import { ActiveTab } from './types';
import { Header } from './components/Header';
import { SchoolDatabase } from './components/SchoolDatabase';
import { PresentationDeck } from './components/PresentationDeck';
import { CodeLab } from './components/CodeLab';
import { ChainOfSilence } from './components/ChainOfSilence';
import { StakeholderPerspectives } from './components/StakeholderPerspectives';
import { ForensicWorkbench } from './components/ForensicWorkbench';
import { AuditSimulator } from './components/AuditSimulator';
import { PolicyFramework } from './components/PolicyFramework';
import { FieldActionKit } from './components/FieldActionKit';
import {
  ShieldAlert,
  BookOpen,
  Scale,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Lock
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('schooldatabase');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'schooldatabase' && <SchoolDatabase />}

        {activeTab === 'presentation' && (
          <PresentationDeck onJumpToToolkit={() => setActiveTab('workbench')} />
        )}

        {activeTab === 'codelab' && <CodeLab />}

        {activeTab === 'explainer' && (
          <ChainOfSilence onExploreTools={() => setActiveTab('workbench')} />
        )}

        {activeTab === 'perspectives' && <StakeholderPerspectives />}

        {activeTab === 'workbench' && <ForensicWorkbench />}

        {activeTab === 'simulator' && <AuditSimulator />}

        {activeTab === 'policy' && <PolicyFramework />}

        {activeTab === 'fieldkit' && <FieldActionKit />}
      </main>

      {/* Educational Footer */}
      <footer className="bg-slate-900 border-t border-slate-800/80 py-10 mt-16 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                <Lock className="w-4 h-4 text-indigo-400" />
                <span>SchoolTruth Project</span>
              </div>
              <p className="leading-relaxed">
                An open-source institutional forensic methodology designed to detect metric fabrication, protect honest schools from punitive budget cuts, and restore authentic learning diagnostics.
              </p>
            </div>

            <div>
              <div className="text-white font-bold text-sm mb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Fundamental Principles</span>
              </div>
              <ul className="space-y-1.5">
                <li>
                  <strong className="text-slate-300">Campbell’s Law:</strong> "The more any quantitative social indicator is used for decision-making, the more subject it will be to corrupting pressures."
                </li>
                <li>
                  <strong className="text-slate-300">Goodhart’s Law:</strong> "When a measure becomes a target, it ceases to be a good measure."
                </li>
              </ul>
            </div>

            <div>
              <div className="text-white font-bold text-sm mb-2 flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-emerald-400" />
                <span>The Diagnostic Shield</span>
              </div>
              <p className="leading-relaxed">
                Never penalize a school for telling the diagnostic truth. Protect operational budgets, reward verified reading gains with targeted reading specialists, and audit using non-corruptible physical footprints.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 text-center text-slate-500 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Built for educators, citizens, investigative monitors, and reform policymakers.</span>
            <span>Independent Triangulation • Non-Punitive Auditing • Student-Centered Integrity</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
