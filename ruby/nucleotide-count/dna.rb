class DNA

  def initialize(dna)
    @dna = dna
  end

  def count(nucleotide)
    if @dna.include?(nucleotide)
      nucleotide.count(nucleotide)
    else
      0
    end
  end

  def nucleotide_counts
  end

  def possible_nucleotides
    ['A', 'C', 'G', 'T']
  end

end
